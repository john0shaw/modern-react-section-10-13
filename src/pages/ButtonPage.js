import Button from "../components/Button";
import { GoBell, GoDownload, GoDatabase } from 'react-icons/go';

function ButtonPage() {
    return <div>
        <div>
            <Button success rounded outline>
                <GoBell />Click Me
            </Button>
        </div>
        <div>
            <Button danger outline>
                <GoDownload />Buy Now
            </Button>
        </div>
        <div>
            <Button warning>
                <GoDatabase />See Deal
            </Button>
        </div>
        <div>
            <Button secondary outline>
                Hide Ads
            </Button>
        </div>
        <div>
            <Button primary rounded>
                Something
            </Button>
        </div>
    </div>;
}

export default ButtonPage;