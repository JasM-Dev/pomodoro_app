import StyledSettingsModal from "../styled/components/SettingsModal.styled"
import SettingsForm from "./SettingsForm"

const SettingsModal = ({handleCloseClick,restart}) => {
    return (
        <StyledSettingsModal>
            <div className="modal_container">
                <SettingsForm handleCloseClick={handleCloseClick} restart={restart}/>
            </div>
        </StyledSettingsModal>
    )
}

export default SettingsModal
