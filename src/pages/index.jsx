import { render } from '@czechitas/render';
import '../global.css';
import './index.css';

import { Header } from './components/Header';
import { PreparationTime } from './components/PreparationTime';
import { Ingredients } from './components/Ingredients';
import { Instructions } from './components/Instructions';
import { Nutrition } from './components/Nutrition';
import { Footer } from './components/Footer';

import omeletteImage from '../img/image-omelette.jpeg';

import { prepTime } from '../data/prepTime';
import { ingredientItem } from '../data/ingredientItem';
import { instructions } from '../data/instructions';
import { nutritionList } from '../data/nutritionList';

const omeletteImg = omeletteImage;

document.querySelector('#root').innerHTML = render(
  <div className="container">
    <header>
      < Header omelette={omeletteImg} />
    </header>
    <main>
      < PreparationTime times={prepTime} />
      < Ingredients items={ingredientItem} />
      < Instructions instruction={instructions} />
      < Nutrition nutritionsList={nutritionList} />
    </main>
    <footer>
      < Footer />
    </footer>
  </div>
);
