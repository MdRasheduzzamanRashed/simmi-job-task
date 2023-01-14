import React from 'react';

const About = () => {
    return (
      <div className=' my-10'>
        <h2 className="text-4xl font-semibold bg-slate-500 text-white py-3 pl-3 my-3">
          Simple React Site
        </h2>
        <h2 className="text-2xl font-semibold">Home Page</h2>
        <h4 className="text-xl font-medium">## A slider of banner image</h4>
        <p>
          For slider I use <strong>daisy ui carousel</strong>. image will be
          changed after click the arrow icons or image numbers.
        </p>

        <h4 className="text-xl font-medium">## Items cards</h4>
        <p>
          For card I use <strong>daisy ui card</strong>. I use grid to organize
          all items in desktop it will show 4 colum and in mobile 1 colum as
          required. For fetching data i use local data.json file.
        </p>
        <h2 className="text-2xl font-semibold">About Page</h2>
        <h4 className="text-xl font-medium">### Documentation of this site.</h4>
        <h2 className="text-2xl font-semibold">Profile Page</h2>
        <h4 className="text-xl font-medium">### about myself.</h4>
      </div>
    );
};

export default About;