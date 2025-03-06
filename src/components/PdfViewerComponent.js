import WebViewer from '@pdftron/pdfjs-express-viewer';
import { useEffect, useRef, useState } from 'react';

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

export default function PdfViewerComponent({ url, esDescargable }) {
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
                    'toolsHeader',
                    'downloadButton'
                    //...(!esDescargable ? ["downloadButton"] : [])
                ]
            },
            viewer.current
        ).then((ins) => {
            ins.UI.setLanguage('es');
            ins.UI.setTheme('dark');
            instance.current = ins;

            // Create our own button
            if (esDescargable) {
                debugger
                ins.UI.setHeaderItems((header) => {
                    header.getHeader('default').push({
                    img: "icon-header-download",
                    index: -1,
                    type: "actionButton",
                    element: 'downloadButton',
                    title: "Descargar",
                    onClick: () => {
                        ins.UI.downloadPdf()
                    }
                    });
                });
            }
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