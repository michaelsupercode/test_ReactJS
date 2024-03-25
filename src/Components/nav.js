const Nav = (props) => {
    return (
        <nav>
            <ul>
                <li><a href="#"> {props.one} </a></li>
                <li><a href="#">{props.two}</a></li>
                <li><a href="#">{props.three}</a></li>
                <li><a href="#">{props.four}</a></li>
            </ul>
        </nav>
    )
}

export default Nav