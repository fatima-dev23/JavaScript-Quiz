let currentQuestionIndex = 0;
        const choices = document.querySelectorAll('.choice');
        const resultDiv = document.querySelector('.result');
        const nextButton = document.querySelector('.next-question');
        const scoreSpan = document.getElementById('score');
        let score = 0;

        function showQuestion(index) {
            const questions = document.querySelectorAll('.question');
            const choicesContainers = document.querySelectorAll('.choices');

            questions.forEach((q, i) => q.classList.add('d-none'));
            choicesContainers.forEach((c, i) => c.classList.add('d-none'));

            questions[index].classList.remove('d-none');
            choicesContainers[index].classList.remove('d-none');
        }

        function showResult() {
            resultDiv.classList.remove('d-none');
            scoreSpan.textContent = score;
            nextButton.classList.add('d-none');
        }

        choices.forEach(choice => {
            choice.addEventListener('click', function() {
                const isCorrect = this.dataset.answer === 'correct';
                if (isCorrect) {
                    score++;
                }
                currentQuestionIndex++;
                if (currentQuestionIndex < document.querySelectorAll('.question').length) {
                    showQuestion(currentQuestionIndex);
                } else {
                    showResult();
                }
            });
        });

        nextButton.addEventListener('click', function() {
            currentQuestionIndex++;
            if (currentQuestionIndex < document.querySelectorAll('.question').length) {
                showQuestion(currentQuestionIndex);
            } else {
                showResult();
            }
        });

        showQuestion(currentQuestionIndex);