import WebViewer from '@pdftron/pdfjs-express-viewer';
import { useEffect, useRef } from 'react';

const container_css = {
    "width": "100%",
    "height": "600px",
    "maxHeight": "900px",
    "display": "flex",
    "flexDirection": "column"
};

const header_css = {
    "width": "100%",
    "height": "60px",
    "padding": "8px 8px 8px 16px",
    "boxSizing": "border-box",
    "background": "#00a5e4",
    "fontSize": "1.2em",
    "lineHeight": "44px",
    "color": "white"
};

const viewer_css = {
    "flex": "1",
    "margin": "8px",
    "boxShadow": "1px 1px 10px #999"
};

export default function PdfViewerComponent({ url }) {
    const viewer = useRef(null);
    const instance = useRef();

    useEffect(() => {
        WebViewer(
            {
                licenseKey: "Y6Hwv7hyEFaeqq3V1MM1",
                path: '/webviewer/lib',
                initialDoc: url,
                disabledElements: [
                    'ribbons',
                    'toggleNotesButton',
                    'printButton',
                    'downloadButton',
                    'toolsHeader'
                ]
            },
            viewer.current
        ).then((ins) => {
            ins.UI.setLanguage('es');
            instance.current = ins;
        });
    }, []);

    useEffect(() => {
        if (instance.current) {
            instance.current.loadDocument(url);
        }
    }, [url])

    return (
        <div style={container_css}>
            <div style={viewer_css} ref={viewer}></div>
        </div>
    );
}