import React from 'react';

type LogoProps = {
  width?: number;
  height?: number;
};

const Logo: React.FC<LogoProps> = ({ width = 175, height = 175 }) => {
  return (
    <>
      <svg
        version="1.1"
        id="Layer_1"
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        width={width}
        height={height}
        fill="white"
        viewBox="0 0 550 550"
      >
        <path d="m50 451.992188c-5.523438 0-10 4.476562-10 10v.007812c0 5.519531 4.476562 9.996094 10 9.996094s10-4.480469 10-10.003906c0-5.523438-4.476562-10-10-10zm0 0" />
        <path d="m502 0h-80c-5.523438 0-10 4.476562-10 10v10.4375l-13.34375-.082031c-.019531 0-.042969 0-.0625 0-5.492188 0-9.964844 4.433593-10 9.933593-.035156 5.523438 4.414062 10.03125 9.9375 10.066407l13.46875.082031v103.75c-26.183594 16.492188-49.816406 6.996094-74.761719-3.050781-16.4375-6.621094-33.441406-13.464844-50.40625-11.335938-5.351562.671875-19.796875 2.769531-35.085937 4.988281-14.488282 2.101563-29.472656 4.277344-34.625 4.925782-2.621094.328125-5.234375-.402344-7.359375-2.054688-2.167969-1.691406-3.550781-4.117187-3.886719-6.835937-.21875-1.769531-.800781-6.476563 11.730469-12.292969 26.527343-12.300781 54.796875-22.832031 77.5625-28.890625 5.335937-1.421875 8.511719-6.898437 7.089843-12.238281-1.417968-5.335938-6.894531-8.507813-12.234374-7.089844-23.835938 6.34375-53.300782 17.308594-80.832032 30.078125-9.578125 4.441406-15.464844 9.609375-18.933594 14.820313l-100.257812 27.339843c-10.546875 2.652344-15.957031-1.546875-17.507812-6.363281-1.523438-4.742188.316406-10.855469 7.859374-13.832031 7.847657-2.988281 26.578126-11.234375 50.28125-21.664063 31.414063-13.824218 70.503907-31.03125 101.675782-43.675781 37.042968-15.027344 48.332031-17.292969 86.257812-17.15625h.03125c5.507813 0 9.980469-4.457031 10-9.96875.015625-5.523437-4.449218-10.015625-9.972656-10.03125-40.453125-.136719-54.488281 2.664063-93.832031 18.625-31.445313 12.753906-70.683594 30.023437-102.214844 43.898437-22.566406 9.933594-42.058594 18.511719-49.394531 21.300782-.03125.011718-.0625.023437-.09375.035156-18.683594 7.328125-24.019532 24.960938-19.636719 38.589844 4.316406 13.429687 19.160156 25.292968 41.546875 19.609375.058594-.015625.113281-.027344.171875-.046875l91.527344-24.957032c1.625 6.539063 5.367187 12.316407 10.777343 16.527344 6.347657 4.941406 14.210938 7.113282 22.136719 6.117188 5.34375-.671875 19.75-2.765625 35.003907-4.976563 14.527343-2.109375 29.542968-4.289062 34.707031-4.9375 11.816406-1.484375 25.722656 4.113281 40.441406 10.042969 15.597656 6.28125 33.367187 13.441406 52.597656 13.4375 9.546875 0 19.457031-1.78125 29.636719-6.296875v3.171875c0 5.523438 4.476562 10 10 10h80c5.523438 0 10-4.476562 10-10v-160c0-5.523438-4.476562-10-10-10zm-10 160h-60v-129.425781-.007813s0-.007812 0-.011718v-10.554688h60zm0 0" />
        <path d="m462 60.007812c5.523438 0 10-4.476562 10-10v-.007812c0-5.519531-4.476562-9.996094-10-9.996094s-10 4.480469-10 10.003906c0 5.523438 4.476562 10 10 10zm0 0" />
        <path d="m186 326c23.730469 0 44.730469-11.882812 57.394531-30h36.945313c2.652344 0 5.195312-1.054688 7.070312-2.929688l17.070313-17.070312h11.71875l17.070312 17.070312c1.875 1.875 4.417969 2.929688 7.070313 2.929688h15.660156c2.652344 0 5.195312-1.054688 7.070312-2.929688l30-30c1.875-1.875 2.929688-4.417968 2.929688-7.070312v-30c0-5.519531-4.476562-10-10-10h-142.601562c-12.667969-18.117188-33.664063-30-57.398438-30-38.597656 0-70 31.402344-70 70s31.402344 70 70 70zm190-90v15.859375l-24.140625 24.140625h-7.375l-17.074219-17.070312c-1.875-1.875-4.417968-2.929688-7.070312-2.929688h-20c-2.652344 0-5.195313 1.054688-7.070313 2.929688l-17.070312 17.070312h-23.125c1.894531-6.339844 2.925781-13.050781 2.925781-20s-1.03125-13.660156-2.925781-20zm-190-30c27.570312 0 50 22.429688 50 50s-22.429688 50-50 50-50-22.429688-50-50 22.429688-50 50-50zm0 0" />
        <path d="m166 266c5.523438 0 10-4.480469 10-10.003906 0-5.523438-4.476562-10-10-10s-10 4.476562-10 10v.007812c0 5.523438 4.476562 9.996094 10 9.996094zm0 0" />
        <path d="m358.59375 40.105469h.003906c5.523438 0 9.996094-4.480469 9.996094-10 0-5.523438-4.480469-10-10-10-5.523438 0-10 4.476562-10 10 0 5.519531 4.476562 10 10 10zm0 0" />
        <path d="m417 350.082031c-.058594.015625-.113281.027344-.171875.046875l-91.527344 24.957032c-1.625-6.539063-5.367187-12.316407-10.777343-16.527344-6.347657-4.941406-14.210938-7.113282-22.136719-6.117188-5.34375.671875-19.75 2.765625-35.003907 4.976563-14.527343 2.109375-29.542968 4.289062-34.707031 4.9375-11.8125 1.480469-25.722656-4.113281-40.441406-10.042969-23.34375-9.398438-51.558594-20.757812-82.234375-7.152344v-3.15625c0-5.523437-4.476562-10-10-10h-80c-5.523438 0-10 4.476563-10 10v159.996094c0 5.523438 4.476562 10 10 10h80c5.523438 0 10-4.476562 10-10v-10.4375l13.34375.082031h.0625c5.492188 0 9.964844-4.433593 10-9.9375.035156-5.519531-4.414062-10.027343-9.9375-10.0625l-13.46875-.082031v-103.75c26.183594-16.492188 49.816406-6.996094 74.761719 3.046875 16.441406 6.625 33.449219 13.46875 50.40625 11.335937 5.355469-.671874 19.796875-2.765624 35.085937-4.984374 14.488282-2.105469 29.472656-4.277344 34.625-4.925782 2.621094-.328125 5.234375.398438 7.359375 2.054688 2.171875 1.691406 3.550781 4.117187 3.886719 6.835937.21875 1.769531.804688 6.476563-11.730469 12.289063-26.527343 12.304687-54.792969 22.835937-77.558593 28.894531-5.335938 1.421875-8.511719 6.898437-7.09375 12.234375 1.421874 5.339844 6.902343 8.507812 12.234374 7.09375 23.835938-6.34375 53.300782-17.308594 80.835938-30.078125 9.574219-4.441406 15.460938-9.609375 18.933594-14.820313l100.253906-27.339843c10.542969-2.65625 15.957031 1.546875 17.507812 6.363281 1.523438 4.742188-.316406 10.855469-7.855468 13.832031-7.84375 2.988281-26.582032 11.234375-50.289063 21.667969-31.410156 13.824219-70.5 31.027344-101.671875 43.671875-37.042968 15.027344-48.355468 17.300781-86.257812 17.15625-.007813 0-.019532 0-.03125 0-5.507813 0-9.980469 4.457031-10 9.96875-.015625 5.523437 4.449218 10.015625 9.972656 10.03125.816406.003906 1.621094.003906 2.417969.003906 38.617187 0 52.867187-2.988281 91.414062-18.628906 31.441407-12.753906 70.683594-30.023437 102.210938-43.898437 22.570312-9.933594 42.0625-18.511719 49.394531-21.300782.03125-.011718.0625-.023437.097656-.035156 18.683594-7.328125 24.019532-24.960938 19.636719-38.589844-4.316406-13.425781-19.160156-25.289062-41.546875-19.609375zm-397 141.917969v-140h60v129.4375.011719 10.550781zm0 0" />
        <path d="m153.410156 471.894531h-.007812c-5.523438 0-9.996094 4.480469-9.996094 10 0 5.523438 4.480469 10 10.003906 10 5.523438 0 10-4.476562 10-10 0-5.519531-4.476562-10-10-10zm0 0" />
      </svg>
    </>
  );
};

export default Logo;
