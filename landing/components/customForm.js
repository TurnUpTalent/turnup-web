import React, { useState } from 'react';

const CustomForm = ({ status, message, onValidated }) => {

    const [email, setEmail] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        email &&
        firstName &&
        lastName &&
        email.indexOf("@") > -1 &&
        onValidated({
            EMAIL: email,
            MERGE1: firstName,
            MERGE2: lastName,
        });
        window.lintrk('track', { conversion_id: 15783580 });
    }

    return (
        <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">First Name</label>
                <input type="text" id="firstName" name="firstName" required
                       className="mt-1 p-2 block w-full border-gray-500 rounded-md shadow-sm focus:border-gray-700"
                       style={{borderWidth: 1, borderColor: '#22222266' }}
                       value={firstName}
                       onChange={e => setFirstName(e.target.value)} />
            </div>
            <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">Last Name</label>
                <input type="text" id="lastName" name="lastName" required
                       className="mt-1 p-2 block w-full border-gray-500 rounded-md shadow-sm focus:border-gray-700"
                       style={{borderWidth: 1, borderColor: '#22222266' }}
                       value={lastName}
                       onChange={e => setLastName(e.target.value)} />
            </div>
            <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                <input type="email" id="email" name="email" required
                       className="mt-1 p-2 block w-full border-gray-500 rounded-md shadow-sm focus:border-gray-700"
                       style={{borderWidth: 1, borderColor: '#22222266' }}
                       value={email}
                       onChange={e => setEmail(e.target.value)} />
            </div>

            <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700" style={{ marginTop: 30 }}>
                Submit
            </button>

            {status === "sending" && <div className="mc__alert mc__alert--sending">sending...</div>}
            {status === "error" && <div className="mc__alert mc__alert--error" dangerouslySetInnerHTML={{ __html: "That didn't work! Could you try again?" }} />}
            {status === "success" && <div className="mc__alert mc__alert--success" dangerouslySetInnerHTML={{ __html: "Thanks for reaching out. Our CEO Nick will be in contact shortly!" }} />}
        </form>
    );
};

export default CustomForm;