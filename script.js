const quizData = [
    {
        question: "What does HTML stand for?",
        a: "Hyper Text Markup Language",
        b: "Hot Mail",
        c: "How to Make Lasagna",
        d: "Hyperlinks and Text Markup Language",
        correct: "a",
    },
    {
        question: "Which programming language is used for web apps?",
        a: "PHP",
        b: "Python",
        c: "Javascript",
        d: "All",
        correct: "d",
    },
    
    {
        question: "Who is the father of Computer Science?",
        a: "Charles Babbage",
        b: "Dennis Ritchie",
        c: "Alan Turing",
        d: "Nikola Tesla",
        correct: "a",
    },
    {
        "question": "Which programming language is used for web apps?",
        "a": "PHP",
        "b": "Python",
        "c": "Javascript",
        "d": "All",
        "correct": "d"
    },
        {
            "question": "Which programming language is used for web apps?",
            "a": "PHP",
            "b": "Python",
            "c": "Javascript",
            "d": "All",
            "correct": "d"
        },
        {
            "question": "Which data structure uses FIFO (First In First Out)?",
            "a": "Stack",
            "b": "Queue",
            "c": "Array",
            "d": "Tree",
            "correct": "b"
        },
        {
            "question": "Which one is not a programming language?",
            "a": "Python",
            "b": "Java",
            "c": "HTML",
            "d": "Ruby",
            "correct": "c"
        },
        {
            "question": "What is the time complexity of binary search?",
            "a": "O(n)",
            "b": "O(log n)",
            "c": "O(n^2)",
            "d": "O(1)",
            "correct": "b"
        },
        {
            "question": "Which of the following is a database management system?",
            "a": "MySQL",
            "b": "HTML",
            "c": "CSS",
            "d": "JavaScript",
            "correct": "a"
        },
        {
            "question": "Which of the following is a server-side scripting language?",
            "a": "PHP",
            "b": "JavaScript",
            "c": "HTML",
            "d": "CSS",
            "correct": "a"
        },
        {
            "question": "What does CSS stand for?",
            "a": "Computer Style Sheets",
            "b": "Creative Style Sheets",
            "c": "Colorful Style Sheets",
            "d": "Cascading Style Sheets",
            "correct": "d"
        },
        {
            "question": "Which is an object-oriented programming language?",
            "a": "C",
            "b": "C++",
            "c": "Assembly",
            "d": "HTML",
            "correct": "b"
        },
        {
            "question": "What is the main purpose of an operating system?",
            "a": "To manage hardware",
            "b": "To run applications",
            "c": "To connect to the internet",
            "d": "All of the above",
            "correct": "d"
        },
        {
            "question": "Which of the following is a NoSQL database?",
            "a": "MySQL",
            "b": "MongoDB",
            "c": "Oracle",
            "d": "SQLite",
            "correct": "b"
        },
        {
            "question": "Which protocol is used for secure communication over a computer network?",
            "a": "HTTP",
            "b": "FTP",
            "c": "HTTPS",
            "d": "SMTP",
            "correct": "c"
        },
        {
            "question": "What does API stand for?",
            "a": "Application Programming Interface",
            "b": "Application Program Integration",
            "c": "Application Protocol Interface",
            "d": "Application Programming Interconnect",
            "correct": "a"
        },
        {
            "question": "Which of the following is not a version control system?",
            "a": "Git",
            "b": "Mercurial",
            "c": "SVN",
            "d": "FTP",
            "correct": "d"
        },
        {
            "question": "Which sorting algorithm is the fastest in the average case?",
            "a": "Bubble Sort",
            "b": "Merge Sort",
            "c": "Insertion Sort",
            "d": "Selection Sort",
            "correct": "b"
        },
        {
            "question": "Which of the following is a markup language?",
            "a": "XML",
            "b": "Java",
            "c": "Python",
            "d": "C++",
            "correct": "a"
        },
        {
            "question": "What is the default port for HTTP?",
            "a": "80",
            "b": "443",
            "c": "21",
            "d": "25",
            "correct": "a"
        },
        {
            "question": "Which of the following is an example of a relational database?",
            "a": "MongoDB",
            "b": "PostgreSQL",
            "c": "Redis",
            "d": "Cassandra",
            "correct": "b"
        },
        {
            "question": "What does IDE stand for?",
            "a": "Integrated Development Environment",
            "b": "Integrated Data Environment",
            "c": "Integrated Design Environment",
            "d": "Integrated Deployment Environment",
            "correct": "a"
        },
        {
            "question": "Which of the following is used for creating web pages?",
            "a": "HTML",
            "b": "Python",
            "c": "Java",
            "d": "C#",
            "correct": "a"
        },
        {
            "question": "What is the primary purpose of a firewall?",
            "a": "To speed up internet access",
            "b": "To block unauthorized access",
            "c": "To monitor network traffic",
            "d": "To manage user accounts",
            "correct": "b"
        },
        {
            "question": "Which data structure is used to implement recursion?",
            "a": "Queue",
            "b": "Stack",
            "c": "Array",
            "d": "Linked List",
            "correct": "b"
        },
        {
            "question": "Which of the following is not an operating system?",
            "a": "Windows",
            "b": "Linux",
            "c": "Android",
            "d": "Microsoft Office",
            "correct": "d"
        },
        {
            "question": "Which language is primarily used for data analysis?",
            "a": "Java",
            "b": "C#",
            "c": "R",
            "d": "Ruby",
            "correct": "c"
        },
        {
            "question": "What is the primary purpose of the 'return' statement in a function?",
            "a": "To terminate the program",
            "b": "To return a value to the caller",
            "c": "To create a loop",
            "d": "To declare a variable",
            "correct": "b"
        },
        {
            "question": "Which of the following is a JavaScript framework?",
            "a": "Django",
            "b": "Flask",
            "c": "React",
            "d": "Spring",
            "correct": "c"
        },
        {
            "question": "What is the function of the ALU in a CPU?",
            "a": "To perform arithmetic and logical operations",
            "b": "To store data",
            "c": "To manage memory",
            "d": "To control input and output",
            "correct": "a"
        },
        {
            "question": "Which is the most widely used version control system?",
            "a": "Subversion",
            "b": "Git",
            "c": "Mercurial",
            "d": "CVS",
            "correct": "b"
        },
        {
            "question": "What does SQL stand for?",
            "a": "Structured Query Language",
            "b": "Simple Query Language",
            "c": "Sequential Query Language",
            "d": "Standard Query Language",
            "correct": "a"
        },
        {
            "question": "What is the main use of a VPN?",
            "a": "To increase internet speed",
            "b": "To secure internet connections",
            "c": "To block ads",
            "d": "To bypass firewalls",
            "correct": "b"
        },
        {
            "question": "Which algorithm is commonly used for encrypting data?",
            "a": "AES",
            "b": "Quick Sort",
            "c": "Dijkstra's",
            "d": "Binary Search",
            "correct": "a"
        },
        {
            "question": "Which of the following is not a programming paradigm?",
            "a": "Functional",
            "b": "Object-oriented",
            "c": "Procedural",
            "d": "Multitasking",
            "correct": "d"
        },
        {
            "question": "What does 'git pull' do?",
            "a": "Downloads changes from the remote repository",
            "b": "Uploads changes to the remote repository",
            "c": "Merges changes from different branches",
            "d": "Deletes files from the repository",
            "correct": "a"
        },
        {
            "question": "Which of the following is a front-end framework?",
            "a": "Angular",
            "b": "Node.js",
            "c": "Django",
            "d": "Flask",
            "correct": "a"
        },
        {
            "question": "What is an array?",
            "a": "A data structure that holds a fixed number of elements",
            "b": "A variable that can hold multiple values",
            "c": "A type of function",
            "d": "A method of sorting",
            "correct": "a"
        }
    ]

    const questionEl = document.getElementById('question');
    const a_text = document.getElementById('a_text');
    const b_text = document.getElementById('b_text');
    const c_text = document.getElementById('c_text');
    const d_text = document.getElementById('d_text');
    const submitBtn = document.getElementById('submit');
    const finishBtn = document.getElementById('finish');
    const restartBtn = document.getElementById('restart');
    
    let currentQuiz = 0;
    let score = 0;
    let attempted = 0;  // To keep track of how many questions were attempted
    
    // Shuffle the quiz data
    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]]; // Swap elements
        }
    }
    shuffleArray(quizData); // Shuffle the quiz questions
    
    loadQuiz();
    
    function loadQuiz() {
        deselectAnswers();
        const currentQuizData = quizData[currentQuiz];
        questionEl.innerText = currentQuizData.question;
        a_text.innerText = currentQuizData.a;
        b_text.innerText = currentQuizData.b;
        c_text.innerText = currentQuizData.c;
        d_text.innerText = currentQuizData.d;
    }
    
    function deselectAnswers() {
        const answers = document.querySelectorAll('.answer');
        answers.forEach(answer => answer.checked = false);
    }
    
    function getSelected() {
        const answers = document.querySelectorAll('.answer');
        let answer = undefined;
        answers.forEach((ans) => {
            if (ans.checked) {
                answer = ans.id;
            }
        });
        return answer;
    }
    
    submitBtn.addEventListener('click', () => {
        const answer = getSelected();
        if (answer) {
            attempted++;  // Increment the number of attempted questions
            if (answer === quizData[currentQuiz].correct) {
                score++;
            }
            currentQuiz++;
            if (currentQuiz < quizData.length) {
                loadQuiz();
            } else {
                showResults();  // If all questions are done, show results
            }
        }
    });
    
    finishBtn.addEventListener('click', () => {
        showResults();  // Show results when the user finishes the attempt
    });
    
    restartBtn.addEventListener('click', () => {
        score = 0;
        attempted = 0;  // Reset the number of attempted questions
        currentQuiz = 0;
        shuffleArray(quizData); // Shuffle questions again on restart
        loadQuiz();
        document.getElementById('quiz').style.display = 'block';
    });
    
    // Function to show the final results
    function showResults() {
        document.getElementById('quiz').innerHTML = `<h2>You answered ${score}/${attempted} questions correctly.</h2>
        <h3>Out of ${quizData.length} total questions</h3>
        <button onclick="location.reload()">Try Again</button>`;
    }