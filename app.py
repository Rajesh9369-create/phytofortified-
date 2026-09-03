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

# Render directly in Streamlit rather than inside an iframe.
# This keeps one normal browser scroll and allows the site's anchor navigation.
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
