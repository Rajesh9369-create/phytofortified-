import streamlit as st
from pathlib import Path

st.set_page_config(
    page_title="PHYTOFORTIFIED",
    page_icon="◌",
    layout="wide",
    initial_sidebar_state="collapsed",
)

root = Path(__file__).parent
html = (root / "index.html").read_text(encoding="utf-8")
css = (root / "styles.css").read_text(encoding="utf-8")
reference_css = (root / "reference-overrides.css").read_text(encoding="utf-8")
js = (root / "script.js").read_text(encoding="utf-8")

# Directly replace the image URLs in the HTML so the reference assets are used
# even if browser-side JavaScript is restricted by the Streamlit renderer.
asset_root = "https://raw.githubusercontent.com/Rajesh9369-create/phytofortified-/main/assets/"
html = html.replace(
    "https://images.unsplash.com/photo-1565680018434-b513d5e5fd47?auto=format&fit=crop&w=1500&q=88",
    asset_root + "hero-reference.webp",
)
html = html.replace(
    "https://www.kalarifoundation.org/wp-content/uploads/2023/07/muringa.jpg",
    asset_root + "moringa-reference.webp",
)
html = html.replace(
    "https://www.ishanayurved.com/medicinal-plants/tulsi-holy-bassil/img-1.jpeg",
    asset_root + "tulsi-reference.webp",
)

# Render directly in Streamlit rather than inside an iframe.
combined_css = css + "\n" + reference_css
html = html.replace('<link rel="stylesheet" href="styles.css">', f'<style>{combined_css}</style>')
html = html.replace('<link rel="stylesheet" href="styles.css" />', f'<style>{combined_css}</style>')
html = html.replace('<script src="script.js"></script>', f'<script>{js}</script>')
html = html.replace('<script src="script.js" defer></script>', f'<script>{js}</script>')

st.markdown(
    """
    <style>
    #MainMenu, header, footer, [data-testid="stToolbar"] { display:none !important; }
    .block-container { padding:0 !important; max-width:none !important; }
    [data-testid="stAppViewContainer"] { padding:0 !important; }
    [data-testid="stHeader"] { display:none !important; }
    </style>
    """,
    unsafe_allow_html=True,
)

st.html(html, unsafe_allow_javascript=True)
