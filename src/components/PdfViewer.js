const PdfViewer = ({ url }) => {
    const container = {
        position: "relative",
        width: "100%",
        overflow: "hidden",
        paddingTop: "100%"
    };

    const responsiveIframe = {
        position: "absolute",
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        width: "100%",
        height: "100%",
        border: "none"
    }

    return (
        <div style={container}>
            <iframe src={`${url}#toolbar=0`} style={responsiveIframe}></iframe>
        </div>
    );
};

export default PdfViewer;