//передаем через пропсы текст вопроса, адрес запроса на сервер
import { Popover, Typography } from "@mui/material";

function YesNoPopover ({
    open,
    anchorEl,
    onClose,
    question,
    actionType,
    onDecision 
}) {
    const handleDecision = (confirmed) => {
        onDecision(actionType, confirmed);
    }
}