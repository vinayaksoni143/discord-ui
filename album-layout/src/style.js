import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme)=>({
    container:{
        backgroundColor : theme.palette.background.paper,
        padding: theme.spacing(10,0,6)
    },
    icon:{
        marginRight:'20px'
    },
    buttons:{
        marginTop:'3px'
    },
    cardGrid:{
        padding:'20px'
    },
    card:{
        height:'100%',
        display:'flex',
        flexDirection:'column',

    },
    cardMedia:{
        paddingTop:'56.25%', //16:9

    },
    cardContent:{
        flexGrow:1,
    }
}));

export default useStyles;