import Button from '@mui/material/Button';

export function Pedido() {
    return (
        <div className="text-5xl flex flex-col m-10 h-1/4 justify-evenly">
            <h1>quer namorar comigo?</h1>
            <div className='flex gap-5 justify-center'>
                <Button variant="outlined" color='black' href='https://wa.link/euxkjf'>SIM</Button>
                <Button variant="outlined" color='black' href='https://youtu.be/clP6BQ5i7gk?si=n-eBOlNW1IajecTB'>NÃO</Button>
            </div>
        </div>
    );
}