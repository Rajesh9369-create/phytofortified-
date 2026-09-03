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
js = (root / "script.js").read_text(encoding="utf-8")

# Render the site directly in Streamlit rather than inside an iframe.
# This removes the nested scrollbar and lets the site's anchor navigation
# control the browser's normal page scroll.
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
    [data-testid="stHeader"] { display:none !important; }
    </style>
    """,
    unsafe_allow_html=True,
)

st.html(html, unsafe_allow_javascript=True)
