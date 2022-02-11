import Logo from './image/image.png';
import './styles.css';
let cmd='SHARE'
let cmd1='LEARN MORE'

function Matter  () {
    return (
        <>
        <table  border={10} width={400}>
            <tr>
        <img src={Logo} alt="" height={300} width={500} />
        <h1>LIZARD</h1>
        <p>
            Lizards are a widespread group of squamate<br></br>
            repetiles,with over 6,000 species,ranging acreoss<br></br>
            all continents except Antartica
            </p>


        </tr>
        <tr border={0}>
            <h2><p>{cmd+   '&'    +cmd1}</p></h2>   
        </tr>

        </table> 
        </>
    );
}
export default Matter;