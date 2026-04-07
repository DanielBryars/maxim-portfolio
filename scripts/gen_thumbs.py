"""Generate responsive WebP thumbnails for the gallery.

Reads every image in ../images/ and writes 400w / 800w / 1600w WebP
versions into ../images/thumbs/. Idempotent: skips outputs that already
exist and are newer than the source.

Run from repo root with the venv interpreter:
    scripts/.venv/Scripts/python.exe scripts/gen_thumbs.py
"""

from __future__ import annotations

from pathlib import Path
from PIL import Image

REPO_ROOT = Path(__file__).resolve().parent.parent
SRC_DIR = REPO_ROOT / "images"
OUT_DIR = SRC_DIR / "thumbs"
WIDTHS = (400, 800, 1600)
QUALITY = 82
SUPPORTED = {".png", ".jpg", ".jpeg"}


def thumb_path(src: Path, width: int) -> Path:
    return OUT_DIR / f"{src.stem}-{width}.webp"


def needs_rebuild(src: Path, dst: Path) -> bool:
    if not dst.exists():
        return True
    return src.stat().st_mtime > dst.stat().st_mtime


def process(src: Path) -> None:
    with Image.open(src) as im:
        im = im.convert("RGB") if im.mode in ("CMYK", "P") else im
        if im.mode == "RGBA":
            # WebP supports alpha; keep as-is
            pass
        elif im.mode != "RGB":
            im = im.convert("RGB")

        original_w = im.width
        for w in WIDTHS:
            dst = thumb_path(src, w)
            if not needs_rebuild(src, dst):
                continue
            if w >= original_w:
                # Don't upscale; just save the original at this slot
                resized = im.copy()
            else:
                ratio = w / original_w
                new_size = (w, round(im.height * ratio))
                resized = im.resize(new_size, Image.LANCZOS)
            resized.save(dst, "WEBP", quality=QUALITY, method=6)
            print(f"  -> {dst.name} ({resized.width}x{resized.height})")


def main() -> None:
    OUT_DIR.mkdir(parents=True, exist_ok=True)
    sources = sorted(
        p for p in SRC_DIR.iterdir()
        if p.is_file() and p.suffix.lower() in SUPPORTED
    )
    print(f"Found {len(sources)} source images")
    for src in sources:
        print(src.name)
        process(src)
    print("Done.")


if __name__ == "__main__":
    main()
