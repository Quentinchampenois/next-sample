import Card from "react-bootstrap/Card";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import { Alert } from "react-bootstrap";
import ToggleButtonGroup from "react-bootstrap/ToggleButtonGroup";
import ToggleButton from "react-bootstrap/ToggleButton";
import Button from "react-bootstrap/Button";

export default function AddFriend() {
    // useForm()
    // 1. register -> register input
    // 2. handleSubmit -> extract data from the form
    // 3. errors -> object containing errors
    const { register, handleSubmit, errors } = useForm();
    const router = useRouter();

    // function to output form data
    // we need to pass it to onSubmit of form element
    const onSubmit = (formData) => {
        localStorage.setItem("pseudo", formData.pseudo);
        router.push({
            pathname: "/",
        });
    };

    return (
        // pass onSubmit to handleSubmit of hook form
        // when button will be pressed you should see form data
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group">
                <label htmlFor="name">
                    Nom de votre ami.e / proche -{" "}
                    <small>
                        Vous serez l'unique personne à avoir accès au nom et
                        prénom
                    </small>
                </label>
                <input
                    // Register input
                    ref={register({ required: true, maxLength: 60 })}
                    name="name"
                    type="text"
                    className="form-control"
                    id="name"
                    placeholder={"Jean Dupont - Elise Dupont"}
                />

                {errors.name && (
                    // if errors then display alert
                    <Alert variant="danger">
                        {errors.name?.type === "required" && (
                            <p>
                                Merci de renseigner le nom / prenom de votre
                                ami.e
                            </p>
                        )}
                        {errors.name?.type === "maxLength" && (
                            <p>
                                La longueur maximale du pseudo est de 60
                                caractères.
                            </p>
                        )}
                    </Alert>
                )}
            </div>
            <div className="form-group">
                <label htmlFor="idea">Age</label>
                <input
                    // Register input
                    ref={register({ required: false })}
                    name="age"
                    type="number"
                    className="form-control"
                    id="age"
                />
                {errors.number && (
                    <Alert variant="danger">
                        {errors.number?.type === "required" && (
                            <p>Merci de renseigner votre idée de cadeau.</p>
                        )}
                    </Alert>
                )}
            </div>

            <Button type="submit" variant={"dark"} size={"lg"} block>
                Enregistrer mon ami.e
            </Button>
        </form>
    );
}
