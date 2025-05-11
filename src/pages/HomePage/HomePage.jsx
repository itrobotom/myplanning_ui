import React from 'react';
import './HomePage.css';
import LoginIcon from '@mui/icons-material/Login';

const slogans = [
    "Список дел — не просто инструмент, а мышечная память вашей организованности. Он экономит время, снижает тревожность и повышает результативность.",
    "Дела не забываются — они организуются. Список задач даёт фокус и освобождает голову.",
    "Чёткий план — меньше хаоса. Список задач помогает успевать главное.",
    "Совместные задачи — это прозрачность, синхронность и порядок. Один список — единая команда.",
    "Организованность — это не черта характера, а привычка. Начни со списка дел."
];

function HomePage() {
    return (
        <div className="main-container">
            {/* Кнопка входа */}
            <button className="login-button" onClick={() => window.location.href = '/tasks'}>
                <LoginIcon style={{ fontSize: 20 }} />
            </button>

            {/* Слоган */}
            <div className="slogan-wrapper">
                <p className="slogan">
                    Список дел - не просто инструмент, это мышечная память вашей организованности. Он экономит время, снижает тревожность и повышает результативность.
                </p>
            </div>

            {/* Превью карточек */}
            <div className="task-preview-container">
                <div className="task-card actual fade-in">Актуальная задача</div>
                <div className="task-card completed fade-in delay-1">Выполненная задача</div>
                <div className="task-card overdue fade-in delay-2">Просроченная задача</div>
            </div>
        </div>
    );
};

export { HomePage };