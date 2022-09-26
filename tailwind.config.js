/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.html"],
  theme: {
    extend:{
      colors: {
        mainorange: "#f3603c",
        mainblue: "#242d52",
        textblack: "#1d1e25",
        linkcolor: "#fcf6f5",
        invalidcolor: "#f33c3c",
        mainpink: "#fff0ec",
        coruselbg: "#fafafa",
      },

      fontFamily:{
        mainFont:[
          '"Be Vietnam Pro"'
        ]
      },

      fontSize:{
        link:['13px', { lineHeight: '19px' }],
        footlink:['15px', { lineHeight: '22px' }],
        mh1: ['40px', { lineHeight: '50px'}],
        mh2: ['30px', { lineHeight: '40px'}],
        h3: ['16px', { lineHeight: '23px'}],
        dh1: ['52px', { lineHeight: '64px'}],
        dh2: ['39px', { lineHeight: '44px'}],
        mdesc: ['14px', { lineHeight: '28px'}],
        ddesc: ['16px', { lineHeight: '26px'}],
      },

      maxWidth:{
        mxwlink: "137px",
        mxnavbar: "325px",
        mxtext: "445px",
        mxheroimg: "540px",
      },

      backgroundImage: {
        "navbar-gr":  "linear-gradient(180deg, rgba(0, 0, 0, 0.0001) 0.33%, rgba(0, 0, 0, 0.599049) 99.79%)",
        "burger": 'url("./images/burger.svg")',
        "burger-x": 'url("./images/x.svg")',
        "body-bg":'url("./images/body-bg-pink.svg"), url("./images/body-bg-pink.svg")',
        "article-bg":'url("./images/article-bg.svg"), url("./images/article-bg.svg")',
      },

      boxShadow: {
        link: '0px 15px 15px -10px #ff9f8e',
        link2: '0px 15px 15px -10px #DB5943',
      },

      backgroundSize:{
        mbodybg: "244px 542px, 171px 328px",
        dbodybg: "436px 970px, 436px 995px",
      },

      backgroundPosition:{
        mbodybg: "calc(50% + 130px) calc(50% - 1350px), calc(50% + 140px) calc(50% - 740px)",
        dbodybg: "calc(50% + 550px) calc(50% - 1000px), calc(50% - 890px) calc(50% + 310px)",
        articlebg: "calc(50% + 930px) calc(50% - 270px), calc(50% - 430px) calc(50% + 130px)"
      },
    },
  },
  plugins: [],
}
