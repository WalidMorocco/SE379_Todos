import { Modal } from './Modal';
import {useState} from 'react'

export const Todo1 = () => {
    const [showModal, setShowModal] = useState(false);

    const onDismissModal = () => {
        setShowModal(false);
    }

    return (
        <>
            <div class="card">
                <div class="card-content">
                    <h2>Learn React</h2>
                    <button onClick={() => setShowModal(true)} class="btn">Done</button>
                </div>
            </div>
            { showModal && <Modal dismissModal={onDismissModal} />}
        </>
    );
}

export const Todo2 = () => {
    const [showModal, setShowModal] = useState(false);

    const onDismissModal = () => {
        setShowModal(false);
    }

    return (
        <>
            <div class="card">
                <div class="card-content">
                    <h2>Workout</h2>
                    <button onClick={() => setShowModal(true)} class="btn">Done</button>
                </div>
            </div>
            { showModal && <Modal dismissModal={onDismissModal} />}
        </>
    );
}

export const Todo3 = () => {
    const [showModal, setShowModal] = useState(false);

    const onDismissModal = () => {
        setShowModal(false);
    }

    return (
        <>
            <div class="card">
                <div class="card-content">
                    <h2>Sleep Early</h2>
                    <button onClick={() => setShowModal(true)} class="btn">Done</button>
                </div>
            </div>
            { showModal && <Modal dismissModal={onDismissModal} />}
        </>
    );
}

const Todo ={
    Todo1,
    Todo2,
    Todo3,
}

export default Todo;