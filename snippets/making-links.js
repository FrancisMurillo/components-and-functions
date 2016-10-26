const Linker = ({url, component}) => {
    return `<a href=\"${url}\">${component}</a>`;
};

const LinkedName = Linker({
    url: 'https://deep-web.com',
    component: myName // The previous component
});
