import { Component } from "react";
import "./employees-add-form.css";

class EmployeesAddForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            salary: "",
            namePlaceholder: "Как его зовут?",
        };
    }

    onValueChange = (e) => {
        const { name, value } = e.target;

        if (name === "name" && /[^a-zA-Zа-яА-Я.]/.test(value)) {
            this.setState({ namePlaceholder: "Только буквы!", name: "" });
            return;
        }

        this.setState({ [name]: value });
    };

    onSubmit = (e) => {
        e.preventDefault();
        const { name, salary } = this.state;

        if (
            name.trim() === "" ||
            salary.trim() === "" ||
            name.length < 3 ||
            salary.length < 3
        ) {
            return;
        }

        this.props.onAdd(name, salary);

        this.setState({
            name: "",
            salary: "",
            namePlaceholder: "Как его зовут?",
        });
    };

    render() {
        const { name, salary, namePlaceholder } = this.state;

        return (
            <div className="app-add-form">
                <h3>Добавьте нового сотрудника</h3>
                <form className="add-form d-flex" onSubmit={this.onSubmit}>
                    <input
                        type="text"
                        className="form-control new-post-label"
                        placeholder={namePlaceholder}
                        name="name"
                        value={name}
                        onChange={this.onValueChange}
                    />
                    <input
                        type="number"
                        className="form-control new-post-label"
                        placeholder="З/П в $?"
                        name="salary"
                        value={salary}
                        onChange={this.onValueChange}
                    />
                    <button type="submit" className="btn btn-outline-light">
                        Добавить
                    </button>
                </form>
            </div>
        );
    }
}

export default EmployeesAddForm;
