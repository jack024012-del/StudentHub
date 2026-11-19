
const featurePages = {
    "My Subjects": {
        title: "My Subjects",
        content: `
            <h3>My School Subjects</h3>
            <p>Manage your enrolled subjects here.</p>
            <ul>
                <li>Programming</li>
                <li>Database Management</li>
                <li>Data Structures</li>
                <li>System Integration</li>
            </ul>
        `
    },

    "Assignments": {
        title: "Assignment Tracker",
        content: `
            <h3>My Assignments</h3>
            <p>Track your school activities and deadlines.</p>
            <input id="taskInput" placeholder="Enter assignment">
            <button onclick="addTask()">Add Assignment</button>
            <ul id="taskList"></ul>
        `
    },

    "Schedule": {
        title: "Class Schedule",
        content: `
            <h3>My Class Schedule</h3>
            <p>Organize your class timetable here.</p>
            <p>Monday - Programming</p>
            <p>Tuesday - Database</p>
            <p>Wednesday - System Integration</p>
        `
    },

    "Notes": {
        title: "My Notes",
        content: `
            <h3>Study Notes</h3>
            <textarea id="myNotes" placeholder="Write your notes here..."></textarea>
            <button onclick="saveNotes()">Save Notes</button>
            <p id="noteStatus"></p>
        `
    },

    "Quiz": {
        title: "Quiz Center",
        content: `
            <h3>Practice Quiz</h3>
            <p>What does HTML stand for?</p>
            <button onclick="checkAnswer('wrong')">High Text Machine Language</button>
            <button onclick="checkAnswer('correct')">HyperText Markup Language</button>
            <p id="quizResult"></p>
        `
    },

    "Study Assistant": {
        title: "Study Assistant",
        content: `
            <h3>Student Learning Center</h3>
            <p>Welcome! Choose a topic and review your lessons.</p>
            <p>Use your notes and reviewers to study effectively.</p>
        `
    }
};

const dashboard = document.querySelector(".dashboard");
const featureView = document.getElementById("feature-view");

document.querySelectorAll("[data-feature]").forEach(button => {
    button.addEventListener("click", () => {
        const name = button.dataset.feature;
        const page = featurePages[name];

        if (!page) return;

        dashboard.hidden = true;
        document.querySelector(".welcome").hidden = true;
        featureView.hidden = false;

        featureView.innerHTML = `
            <button id="backButton">← Back to Dashboard</button>
            <h2>${page.title}</h2>
            ${page.content}
        `;

        document.getElementById("backButton")
            .addEventListener("click", goBack);
    });
});

function goBack() {
    featureView.hidden = true;
    dashboard.hidden = false;
    document.querySelector(".welcome").hidden = false;
}

function addTask() {
    const input = document.getElementById("taskInput");
    if (!input.value.trim()) return;

    const li = document.createElement("li");
    li.textContent = input.value;
    document.getElementById("taskList").appendChild(li);
    input.value = "";
}

function saveNotes() {
    const notes = document.getElementById("myNotes").value;
    document.getElementById("noteStatus").textContent =
        "Notes saved for this session!";
}

function checkAnswer(answer) {
    document.getElementById("quizResult").textContent =
        answer === "correct" ? "Correct! Well done!" : "Try again!";
}
