import React from 'react';
import { AiFillIdcard, AiFillPhone, AiOutlineUser } from 'react-icons/ai';
import { FaHardHat, FaUniversity } from 'react-icons/fa';
import { MdEmail, MdLocationOn, MdSchool } from 'react-icons/md';
import { Translator } from '../data/util';

const Details = ({ user, onClose }) => {
  const userType = () => {
    if (user.personType === 'Student') {
      return (
        <p className="text-gray-700 text-sm">
          <MdSchool className="inline text-2xl pb-0.5 mr-1" />
          {`Estudiante - ${user.studentYear}º Añó - Grupo ${user.studentGroup}`}
        </p>
      );
    } else if (user.personType === 'Worker' && 'studentYear' in user) {
      return (
        <div>
          <p className=" text-gray-700 text-sm">
            <FaHardHat className="inline text-2xl pb-0.5 mr-1" /> Trabajador &{' '}
            <MdSchool className="inline text-2xl pb-0.5 mr-1" /> Estudiante
            {` - ${user.studentYear}º Añó - Grupo ${user.studentGroup}`}
          </p>
        </div>
      );
    }
    return (
      <p className=" text-gray-700 text-sm">
        <FaHardHat className="inline text-2xl pb-0.5 mr-1" />
        Trabajador
      </p>
    );
  };

  return (
    <div className="flex overflow-x-hidden overflow-y-auto fixed h-full top-0 left-0 right-0 md:inset-0 z-50 justify-center items-center bg-gray-900/50">
      <div className="bg-white shadow-lg rounded-lg mx-auto max-w-xl md:max-w-2xl md:w-3/4">
        <div className="px-6 py-8">
          {/* <img
            className="w-12 h-12 rounded-full object-cover mr-4 shadow"
            src="https://images.unsplash.com/photo-1542156822-6924d1a71ace?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
            alt="avatar"
          /> */}
          <div className="flex flex-col">
            <div className="flex items-center justify-between">
              <h1 className="text-xl font-semibold text-gray-900 -mt-1 ml-2">
                {`${user.name} ${user.surname} ${user.lastname}`}
              </h1>
            </div>
            <hr />
            <div className="ml-4 mt-4 text-gray-700 text-sm">
              <p>
                <MdEmail className="inline text-2xl pb-0.5 mr-1" />
                {user.email}
              </p>
              <p className="mt-3">
                <FaUniversity className="inline text-2xl pb-0.5 mr-1" />
                {Translator(user.area)}
              </p>
              <p>{userType()}</p>
            </div>
            <button
              className="self-end w-fit mt-3 pt-2 text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              onClick={onClose}
            >
              Cerrar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
