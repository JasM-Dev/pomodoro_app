import StyledSettingsModal from "../styled/components/SettingsModal.styled"
import SettingsForm from "./SettingsForm"

const SettingsModal = ({handleCloseClick}) => {
    return (
        <StyledSettingsModal>
            <div className="modal_container">
                <SettingsForm handleCloseClick={handleCloseClick}/>
            </div>
        </StyledSettingsModal>
    )
}

export default SettingsModal
