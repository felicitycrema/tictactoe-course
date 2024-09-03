import { useState } from "react"

export const useModal = () => {
    const [modal, setModal] = useState(false);
    const [ModalContent, setModalContent] = useState("IM A MODAL");

    const handleModal = (content = false) => {
        setModal(!modal);
        if (content) {
            setModalContent(content);
        }        
    };
    
    return { modal, ModalContent, handleModal};
};

