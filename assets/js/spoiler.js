// Простая функция для переключения спойлера
function toggleSpoiler(spoilerId) {
    const spoilerContent = document.getElementById(spoilerId);
    const spoilerIcon = document.getElementById(spoilerId + '-icon');
    
    if (spoilerContent && spoilerIcon) {
        const isExpanded = spoilerContent.classList.contains('expanded');
        
        if (isExpanded) {
            spoilerContent.classList.remove('expanded');
            spoilerIcon.classList.remove('rotated');
        } else {
            spoilerContent.classList.add('expanded');
            spoilerIcon.classList.add('rotated');
        }
    }
}

// Инициализация спойлеров
function initSpoilers() {
    const spoilerHeaders = document.querySelectorAll('.spoiler-header');
    
    spoilerHeaders.forEach((header, index) => {
        // Очищаем существующие обработчики
        const newHeader = header.cloneNode(true);
        header.parentNode.replaceChild(newHeader, header);
        
        // Добавляем новый обработчик
        newHeader.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            const spoilerId = this.nextElementSibling.id;
            
            if (spoilerId) {
                toggleSpoiler(spoilerId);
            }
        });
        
        // Добавляем поддержку клавиатуры
        newHeader.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                const spoilerId = this.nextElementSibling.id;
                if (spoilerId) {
                    toggleSpoiler(spoilerId);
                }
            }
        });
        
        // Настройки доступности
        newHeader.setAttribute('tabindex', '0');
        newHeader.setAttribute('role', 'button');
        newHeader.setAttribute('aria-expanded', 'false');
        if (newHeader.nextElementSibling) {
            newHeader.setAttribute('aria-controls', newHeader.nextElementSibling.id);
        }
    });
}

// Инициализация при загрузке DOM
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initSpoilers);
} else {
    initSpoilers();
}

// Дополнительная инициализация при полной загрузке
window.addEventListener('load', function() {
    setTimeout(initSpoilers, 100);
}); 