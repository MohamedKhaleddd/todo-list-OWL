# 📝 OWL Todo List — Odoo 17

<p align="center">
  <strong>A Task Management Application Built with Odoo 17 and OWL</strong>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Odoo-17.0-714B67?style=for-the-badge&logo=odoo&logoColor=white" alt="Odoo 17"/>
  <img src="https://img.shields.io/badge/OWL-Framework-714B67?style=for-the-badge" alt="OWL Framework"/>
  <img src="https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript"/>
  <img src="https://img.shields.io/badge/Python-3-3776AB?style=for-the-badge&logo=python&logoColor=white" alt="Python"/>
</p>

## 📌 Overview

**OWL Todo List** is a custom Odoo 17 module that provides an interactive task management interface built with the Odoo Web Library (OWL).

The application integrates a custom frontend with Odoo's ORM services, allowing users to manage tasks directly from the Odoo backend through a client action.

This project demonstrates practical experience with Odoo module development, OWL components, JavaScript, XML templates, and frontend-to-backend integration.

## ✨ Features

* **Create Tasks** — Add new tasks through a modal form.
* **Edit Tasks** — Update existing task information.
* **Delete Tasks** — Remove tasks when they are no longer needed.
* **Task Completion** — Mark tasks as completed using checkboxes.
* **Color Customization** — Choose a custom color for each task.
* **Live Search** — Filter tasks by name as you type.
* **Persistent Data** — Store and retrieve tasks using Odoo's ORM services.
* **Interactive UI** — Use a responsive task management interface integrated into the Odoo backend.

## 🛠️ Tech Stack

| Technology | Purpose                               |
| ---------- | ------------------------------------- |
| Odoo 17    | ERP framework and backend integration |
| OWL        | Reactive frontend components          |
| JavaScript | Frontend logic and event handling     |
| XML / QWeb | OWL component templates               |
| Python     | Odoo models and server-side logic     |
| SCSS       | Frontend styling                      |
| PostgreSQL | Database managed by Odoo              |

## 📂 Project Structure

```text
owl_dev/
├── controllers/
├── demo/
├── models/
│   ├── __init__.py
│   └── models.py
├── security/
│   └── ir.model.access.csv
├── static/
│   └── src/
│       └── componentes/
│           └── todo_list/
│               ├── todo_list.js
│               ├── todo_list.xml
│               └── todo_list.scss
├── views/
│   ├── templates.xml
│   └── views.xml
├── __init__.py
├── __manifest__.py
└── README.md
```

## ⚙️ Requirements

Before installing the module, make sure you have:

* Odoo 17.0 installed and configured.
* Python and the dependencies required by your Odoo installation.
* PostgreSQL configured for Odoo.
* Access to the Odoo Apps interface.

## 🚀 Installation

### 1. Clone the repository

```bash
git clone https://github.com/MohamedKhaleddd/todo-list-OWL.git
```

### 2. Copy the module into your custom addons directory

Copy the `owl_dev` directory into your Odoo 17 custom addons directory.

Example:

```text
odoo17/
└── projects/
    └── addons/
        └── owl_dev/
```

### 3. Configure the addons path

Ensure your `odoo.conf` includes the directory containing the `owl_dev` module in its `addons_path`.

Example:

```ini
addons_path = /path/to/odoo/addons,/path/to/custom/addons
```

Replace the example paths with the actual paths on your machine.

### 4. Restart Odoo

Start your Odoo 17 server using your existing configuration.

```bash
python odoo-bin -c ./odoo.conf
```

### 5. Install the module

1. Open your Odoo instance in the browser.
2. Enable Developer Mode.
3. Navigate to **Apps**.
4. Update the Apps List if necessary.
5. Search for **Owl Dev**.
6. Click **Install**.

## 💻 Usage

After installing the module, open its configured menu or client action in Odoo.

You can then:

1. Create a task using the **New** button.
2. Enter the task name and select its color.
3. Set its completion status.
4. Save the task.
5. Edit or delete tasks from the task list.
6. Search for tasks by name.

## 🧠 What I Learned

This project helped me practice:

* Building custom Odoo modules.
* Creating OWL components and QWeb templates.
* Registering client actions in Odoo's action registry.
* Managing reactive frontend state with OWL hooks.
* Using Odoo ORM services to perform CRUD operations.
* Connecting JavaScript interfaces with Odoo backend models.
* Structuring frontend assets inside an Odoo module.

## 🔮 Possible Improvements

* Add task priorities and deadlines.
* Add task categories and filters.
* Improve validation and user feedback.
* Add automated tests for task operations.
* Enhance the interface with additional productivity features.

## 👨‍💻 Author

**Mohamed Khaled**

* GitHub: [@MohamedKhaleddd](https://github.com/MohamedKhaleddd)

---

<p align="center">
  Built as a hands-on project to explore Odoo 17 frontend development with OWL.
</p>
