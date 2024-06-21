import '../pages/Gallery.css'

export default function Modal({show, imageUrl, imageName, onClose}) {
    if (!show) return null;
    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <img src={imageUrl} alt="" />
                {imageName && <p>{imageName}</p>}
                <button className="close-button" onClick={onClose}>X</button>
            </div>
        </div>
    )
}