import streamlit as st
import streamlit.components.v1 as components
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
js = (root / "script.js").read_text(encoding="utf-8")

# Inline the local assets so the full website works inside Streamlit's iframe.
html = html.replace('<link rel="stylesheet" href="styles.css">', f'<style>{css}</style>')
html = html.replace('<link rel="stylesheet" href="styles.css" />', f'<style>{css}</style>')
html = html.replace('<script src="script.js"></script>', f'<script>{js}</script>')
html = html.replace('<script src="script.js" defer></script>', f'<script>{js}</script>')

st.markdown(
    """
    <style>
    #MainMenu, header, footer, [data-testid="stToolbar"] { display:none !important; }
    .block-container { padding:0 !important; max-width:none !important; }
    [data-testid="stAppViewContainer"] { padding:0 !important; }
    iframe { width:100% !important; border:0 !important; }
    </style>
    """,
    unsafe_allow_html=True,
)

components.html(html, height=7200, scrolling=True)
