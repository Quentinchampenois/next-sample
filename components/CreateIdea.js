// import package on top of the file
import { useForm } from "react-hook-form";
// also Alert component from bootstrap
import { Alert } from 'react-bootstrap';
import {useRouter} from "next/router";
import Button from "react-bootstrap/Button";
import ToggleButtonGroup from "react-bootstrap/ToggleButtonGroup";
import ToggleButton from "react-bootstrap/ToggleButton";

export default function CreateIdea() {
    // useForm()
    // 1. register -> register input
    // 2. handleSubmit -> extract data from the form
    // 3. errors -> object containing errors
    const {register, handleSubmit, errors} = useForm();
    const router = useRouter();

    // function to output form data
    // we need to pass it to onSubmit of form element
    const onSubmit = formData => {
        localStorage.setItem("pseudo", formData.pseudo)
        router.push({
            pathname: "/",
        })
    }

    return (
        // pass onSubmit to handleSubmit of hook form
        // when button will be pressed you should see form data
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group">
                <label htmlFor="name">Nom de votre ami.e / proche - <small>Vous serez l'unique personne à avoir accès au nom et prénom</small></label>
                <input
                    // Register input
                    ref={register({required: true, maxLength: 60 })}
                    name="name"
                    type="text"
                    className="form-control"
                    id="name"
                placeholder={"Jean Dupont - Elise Dupont"}/>

                { errors.name &&
                // if errors then display alert
                <Alert variant="danger">
                    { errors.name?.type === "required" && <p>Merci de renseigner le nom / prenom de votre ami.</p> }
                    { errors.name?.type === "maxLength" && <p>La longueur maximale du pseudo est de 60 caractères.</p> }
                </Alert>
                }
            </div>
            <div className="form-group">
                <label htmlFor="idea">Idée de cadeau</label>
                <input
                    // Register input
                    ref={register({required: true, maxLength: 60})}
                    name="idea"
                    type="text"
                    className="form-control"
                    id="idea"
                    placeholder={"Bouteille de vin"} />
                { errors.idea &&
                <Alert variant="danger">
                    { errors.idea?.type === "required" && <p>Merci de renseigner votre idée de cadeau.</p> }
                    { errors.idea?.type === "minLength" && <p>La longueur maximale pour l'idée de cadeau est de 60 caractères.</p> }
                </Alert>
                }
            </div>
            <div className="form-group">
                <label htmlFor="idea">Prix du cadeau</label>
                <div className={"d-flex"}>
                    <input
                        // Register input
                        ref={register({required: false})}
                        name="price"
                        type="number"
                        className="form-control"
                        id="price"
                        placeholder={"15"} />

                    <span className={"p-2"}>€</span>
                </div>

                { errors.idea &&
                <Alert variant="danger">
                    { errors.idea?.type === "required" && <p>Merci de renseigner votre idée de cadeau.</p> }
                    { errors.idea?.type === "minLength" && <p>La longueur maximale pour l'idée de cadeau est de 60 caractères.</p> }
                </Alert>
                }
            </div>

            <div className={"form-group"}>
                <ToggleButtonGroup type="radio" name="options" defaultValue={"public"}>
                    <ToggleButton variant="secondary" value={"public"}>Publique</ToggleButton>
                    <ToggleButton variant="secondary" value={"private"}>Privée</ToggleButton>
                </ToggleButtonGroup>
                        <Alert variant={"warning"}>
                            Rendre une idée <strong>publique</strong> est recommandé ! L'idée de cadeau est anonymisée et peut-être échangée avec les autres utilisateurs !
                        </Alert>
            </div>

            <Button
                type="submit" variant={"dark"} size={'lg'} block>Enregistrer mon idée
            </Button>
        </form>
    )
}