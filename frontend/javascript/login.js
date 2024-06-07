
    document.querySelectorAll('.main_input').forEach(function(input) {
        input.addEventListener('focus', function() {
            this.previousElementSibling.style.opacity = 1;
        });

        input.addEventListener('blur', function() {
            this.previousElementSibling.style.opacity = 0.5;
        });
    });

// <!-- javascript 기능은 현재 i가 input보다 부모기에 순서를 바꿔야되서 결국 js로 동작 진행(공부 필요) -->