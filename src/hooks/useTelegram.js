const tg = window.Telegram.WebApp;

export function useTelegram() {
    // Закрывает приложение (кнопка)
    const onClose = () => {
        tg.close()
    }
    // Показывает или скрывает кнопку.
    const onToggleButton = () => {
        if(tg.MainButton.isVisible) {
            tg.MainButton.hide();
        } else {
            tg.MainButton.show();
        }
    }

    return {
        onClose,
        onToggleButton,
        tg,
        user: tg.initDataUnsafe?.user,
        queryId: tg.initDataUnsafe?.query_id,
    }
}
