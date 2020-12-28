// import package on top of the file
import { useForm } from "react-hook-form";
// also Alert component from bootstrap
import { Alert } from 'react-bootstrap';
import Button from "react-bootstrap/Button";

export default function Signupform() {
    // useForm()
    // 1. register -> register input
    // 2. handleSubmit -> extract data from the form
    // 3. errors -> object containing errors
    const {register, handleSubmit, watch, errors} = useForm();

    // function to output form data
    // we need to pass it to onSubmit of form element
    const onSubmit = formData => {
        alert("Votre compte est bien créé")
        location.replace("/") // TODO: Find a better way to redirect after form
    }

    return (
        // pass onSubmit to handleSubmit of hook form
        // when button will be pressed you should see form data
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group">
                <label htmlFor="pseudo">Pseudonyme - <small>Le pseudo permettant de vous connecter à la plateforme</small></label>
                <input
                    // Register input
                    ref={register({required: true, maxLength: 30 })}
                    name="pseudo"
                    type="text"
                    className="form-control"
                    id="pseudo"/>

                { errors.pseudo &&
                // if errors then display alert
                <Alert variant="danger">
                    { errors.pseudo?.type === "required" && <p>Un pseudo est obligatoire.</p> }
                    { errors.pseudo?.type === "maxLength" && <p>La longueur maximale du pseudo est de 30 caractères.</p> }
                </Alert>
                }
            </div>
            <div className="form-group">
                <label htmlFor="password">Mot de passe</label>
                <input
                    // Register input
                    ref={register({required: true, minLength: 6})}
                    name="password"
                    type="password"
                    className="form-control"
                    id="password" />
                { errors.password &&
                <Alert variant="danger">
                    { errors.password?.type === "required" && <p>Un mot de passe est obligatoire pour vous connecter à votre compte.</p> }
                    { errors.password?.type === "minLength" && <p>La longueur minimale du mot de passe est de 6 caractères. </p> }
                </Alert>
                }
            </div>
            <div className="form-group">
                <label htmlFor="passwordconf">Confirmation de mot de passe</label>
                <input
                    // Register input
                    ref={register({
                        required: true,
                        validate: (value) => value === watch('password')})
                    }
                    name="passwordconf"
                    type="password"
                    className="form-control"
                    id="passwordconf" />

                { errors.passwordconf &&
                <Alert variant="danger">
                    { errors.passwordconf?.type === "required" && <p>Merci de renseigner à nouveau votre mot de passe.</p> }
                    { errors.passwordconf?.type === "validate" && <p>Vos mots de passe semblent différent, merci de renseigner exactement le même.</p> }
                </Alert>
                }
            </div>
            <Button
                type="submit" variant={"dark"} size={'lg'} block>Créer mon compte
            </Button>
        </form>
    )
}