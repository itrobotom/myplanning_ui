import { CardTask } from "../../components/CardTask/CardTask";
import { GroupIconsFooter } from "../../components/FooterListTasks/GroupeIconsFooter/GroupeIconsFooter";
import { Box } from "@mui/material";
import { GroupIconsHeader } from "../../components/HeaderListTasks/GroupIconsHeader/GroupIconsHeader";

function ListTaskPage() {

    return(
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                minHeight: "100vh", // Занимает всю высоту экрана
            }}
            >
            {/* Header (всегда сверху) */}
            <Box sx={{ flexShrink: 0 }}>
                <GroupIconsHeader></GroupIconsHeader>
            </Box>

            {/* Основной контент (прижат к header) */}
            <Box sx={{ flex: "1 0 auto" }}>
                
                {/* ЗДЕСЬ СДЕЛАТЬ КОНТЕЙНЕР ТАСОК, ИЛИ ПРЯМ ТУТ ПРОМАПИТЬ ВСЕ ТАСКИ ПОКА ЧТО В ЭТОМ КОМПОНЕНТЕ */}
                <CardTask />
            </Box>

            {/* Footer (прижат к низу) */}
            <Box sx={{ flexShrink: 0 }}>
                <GroupIconsFooter />
            </Box>
        </Box>
    );

}

export {ListTaskPage}