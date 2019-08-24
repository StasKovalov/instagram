import { Route } from "react-router-dom";
import uid from "uid";

export const checkValidity = (value) => {
   return value.trim() !== '';
}

export const random = (min, max) => {
   return Math.floor(Math.random() * (max - min + 1)) + min; //Включаючи мінімум та максимум 
}

export const shufflePhoto = (max, arr) => {
   let randPhoto = [...arr];
   let j, temp;
   for (let i = randPhoto.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      temp = randPhoto[j];
      randPhoto[j] = randPhoto[i];
      randPhoto[i] = temp;
   }

   return randPhoto.map(photo =>  {
      const commentss = random(0, 10);
      return (
   {
      id: uid(),
      photoURL: photo,
      comments: Array(commentss).fill(1).map(el => (
            {username:users[random(0, users.length-1)],
            comment: lorem[random(0, lorem.length-1)]
            })),
      counts: {
         likes: random(50, max),
         comments: commentss
      }
         })})
}


const publications = [
   "https://picua.org/images/2019/08/13/1b1cc9dfc62c6810f1ffc72ac80bb899.jpg",
   "https://picua.org/images/2019/08/13/ca8b47c5ef47adac87e2df434e0c84c6.jpg",
   "https://picua.org/images/2019/08/13/e7fbf5154da4dd42cfb8cff1c455ddb6.jpg",
   "https://picua.org/images/2019/08/13/afd6156d0044686c7e1acbe83e30f524.jpg",
   "https://picua.org/images/2019/08/13/713eef3fd0cc620e9c64f3da176ac973.jpg",
   "https://picua.org/images/2019/08/13/6a091bc501bb981720123a8c99c6545f.jpg",
   "https://picua.org/images/2019/08/13/395d9547172279a621ef9c98f1fae115.jpg",
   "https://picua.org/images/2019/08/13/72c783e645d074ae84dbfa40b173528f.jpg",
   "https://picua.org/images/2019/08/13/0524df6c615005e536ff1ae28e5e6f1d.jpg",
   "https://picua.org/images/2019/08/13/a9b0a262c77f5cc84e8931605d021cee.jpg",
   "https://picua.org/images/2019/08/13/28f9ce2bef16f8dade896a4ac5c2b04b.jpg",
   "https://picua.org/images/2019/08/13/2f1b1299c987d461d626aa1d3719548e.jpg",
   "https://picua.org/images/2019/08/13/b439520d5b55c762a851e6d3ffba8c45.jpg",
   "https://picua.org/images/2019/08/13/0a2e65e021b532268d5423923f104090.jpg",
   "https://picua.org/images/2019/08/13/cbaa7e7ed72c2b11ce74a7af092fe781.jpg",
   "https://picua.org/images/2019/08/13/86bfa6bc611bc3c8c4ac12f9f55fbf33.jpg",
   "https://picua.org/images/2019/08/13/db87d1ff69944217b027374ffcc27b2f.jpg",
   "https://picua.org/images/2019/08/13/5e8aeb053ae84c559e22d455dc128c74.jpg",
   "https://picua.org/images/2019/08/13/d6badb16399911218dc55022996438dc.jpg",
   "https://picua.org/images/2019/08/13/6b5b26c59ff742e6390ba4874848b4ba.jpg",
   "https://picua.org/images/2019/08/13/c82fbe08fe98e7e2ed1bb37f94547d1e.jpg",
   "https://picua.org/images/2019/08/13/e14cc85af7d59687dcd9e78178c587f8.jpg",
   "https://picua.org/images/2019/08/13/d949eeda4119713f086afe2a71ffd971.jpg",
   "https://picua.org/images/2019/08/13/19c44c42715097e17ced41d91941ca85.jpg",
   "https://picua.org/images/2019/08/13/d3e6bbfd3fea07b432ca3c7f8d298b62.jpg",
   "https://picua.org/images/2019/08/13/13a50572e5dc29d9f95930bbc62a9462.jpg",
   "https://picua.org/images/2019/08/13/e41b603293e2f17d03c6eb47871bd5ba.jpg",
   "https://picua.org/images/2019/08/13/76179f89f3758ed2b73b3e2d21a99732.jpg",
   "https://picua.org/images/2019/08/13/fcdf987ae427f9720bf6fb24290048fa.jpg",
   "https://picua.org/images/2019/08/13/f5dd18732bbea91e7d97d997e162f7a4.jpg",
   "https://picua.org/images/2019/08/13/2712917710455085a5fb547b28b37dcf.jpg",
   "https://picua.org/images/2019/08/13/ba947ee56df7d343cab97d51992dc8bc.jpg",
   "https://picua.org/images/2019/08/13/755f6853b5b89db2ecc3cb73762f1ef0.jpg",
   "https://picua.org/images/2019/08/13/0aa2aaeff86febd17dddea95c1fc4310.jpg",
   "https://picua.org/images/2019/08/13/17d338cdbaaa7a3a3a13d7f012316dad.jpg",
   "https://picua.org/images/2019/08/13/adeaf16e35a295552abd000c817f4d2c.jpg",
   "https://picua.org/images/2019/08/13/ce2d4303aa6b06fb2c403f39e75da2ad.jpg",
   "https://picua.org/images/2019/08/13/8d6fe7b9128803e8e47674856a121762.jpg",
   "https://picua.org/images/2019/08/13/f5cbdd7201c17dc804b669d8245e5f5a.jpg",
   "https://picua.org/images/2019/08/13/352ec2e15426bff58c6f9553d53b1e6c.jpg",
   "https://picua.org/images/2019/08/13/434531a36e445e498da38eb2bfd10d02.jpg",
   "https://picua.org/images/2019/08/13/ad47719321b9e2888857be5f5b80220f.png",
   "https://picua.org/images/2019/08/13/61797903840faec3cfbb3b520b9e11ea.jpg",
   "https://picua.org/images/2019/08/13/0806fc7f1dda8105fe2c17dda0e09747.jpg",
   "https://picua.org/images/2019/08/13/46e19a477a4ad5275ebbc5881a8b8d25.jpg",
   "https://picua.org/images/2019/08/13/fd979c348202e1cfa7f92e1c52d45780.jpg",
   "https://picua.org/images/2019/08/13/b899854b421882fc003e07467b9d2238.jpg",
   "https://picua.org/images/2019/08/13/bc2bba6984df4f2f5e8b4fbac136c91c.jpg",
   "https://picua.org/images/2019/08/13/7a026c185b020f264fe03d5e7968881e.jpg",
   "https://picua.org/images/2019/08/13/4d197aa518588b54f59a60485ffb0d5d.jpg",
   "https://picua.org/images/2019/08/13/d62d38ecec1e668389de0079215048fc.jpg",
   "https://picua.org/images/2019/08/13/7a3168f23e3cc11cf95f09dabbf4d0d7.jpg",
   "https://picua.org/images/2019/08/13/91239e5622e3e98a9b11157108e236ec.jpg",
   "https://picua.org/images/2019/08/13/3b0d92dc0428ee401ea283bc5d7b3104.jpg",
   "https://picua.org/images/2019/08/13/b0206dd6c27e7baf7dd464119387fbcc.jpg",
   "https://picua.org/images/2019/08/13/0d44882c8d43c4d878c1444254c298b5.jpg",
   "https://picua.org/images/2019/08/13/8d5598912d09adcc75407aab2791a668.jpg",
   "https://picua.org/images/2019/08/13/c3654ce8b0b66c7fb9e34cdedc02db25.jpg",
   "https://picua.org/images/2019/08/13/d4ae5c564042736211a33e032040b4f5.jpg",
   "https://picua.org/images/2019/08/13/74554fa2971cd712504170457ea23b75.jpg",
   "https://picua.org/images/2019/08/13/54eb7b48c216a1c48213448162a70bbf.jpg",
   "https://picua.org/images/2019/08/13/b446c4f3bdce4d3ed2d86faf379f005f.jpg",
   "https://picua.org/images/2019/08/13/c6801762298d083c8b013ea33044ff08.jpg",
   "https://picua.org/images/2019/08/13/e666e469c9a349a03a4770286faf45f2.jpg",
   "https://picua.org/images/2019/08/13/cc7d7263e7315f1068048cc176754fde.jpg",
   "https://picua.org/images/2019/08/13/9b75aab5ce6281723d22eea0a96a8c3c.jpg",
   "https://picua.org/images/2019/08/13/8e786cb9e8fda255476afed7ac4da14d.jpg",
   "https://picua.org/images/2019/08/13/b75e8b56e5367906e676564a6578d10e.jpg",
   "https://picua.org/images/2019/08/13/ac3859bec75396d95ac3f688fd005711.jpg",
   "https://picua.org/images/2019/08/13/3caba49bc7bc9b6df47696a21db9bb99.jpg",
   "https://picua.org/images/2019/08/13/6876d6b4e7e91373c7e679eaface8e06.jpg",
   "https://picua.org/images/2019/08/13/e23cc9550da29248de799ebc510c3782.jpg",
   "https://picua.org/images/2019/08/13/65995f188dd32fc7267c7952cd9b8dec.jpg",
   "https://picua.org/images/2019/08/13/67ad860f4385b8e72880607b386e10a3.jpg",
   "https://picua.org/images/2019/08/13/2464f64d95ab08ef2fbadcaf63da9fdc.jpg",
   "https://picua.org/images/2019/08/13/05ea44c7f69bcc54dd00a00aafd1fe9c.jpg",
   "https://picua.org/images/2019/08/13/06c0e75defc64e653e7f8a0a6b273709.jpg",
   "https://picua.org/images/2019/08/13/30582deef7c08aa4e245d33ba4a89a08.jpg",
   "https://picua.org/images/2019/08/13/6198a00ccedceba009a04ecb46f0f068.jpg",
   "https://picua.org/images/2019/08/13/0742c2be9973f7e164886d5ea5714460.jpg",
   "https://picua.org/images/2019/08/13/cdcf40bd6b4ee2b3c7a5673390d16783.jpg",
   "https://picua.org/images/2019/08/13/26dba946182f19ad117a93e9b30883a4.jpg",
   "https://picua.org/images/2019/08/13/d44f68a7b0da843748280db63c48eade.jpg",
   "https://picua.org/images/2019/08/13/7d9d12f72b830e6e93a62bb36fb4b4b1.jpg"
];

const comments = ['Как в жизни, так и здесь – легко, красиво и прекрасно!', 'Я хочу тебе сказать, что эта фотография, это лучшее, что я видел в жизни!',
   'У всех просто фотографии, а у тебя супер-мега-классное фото!', 'Если бы сегодня мне не показали эту фотографию, то я бы думал, что в жизни уже и не осталось ничего прекрасного, но как вижу, это не так!',
   'Твоя фотография настолько прекрасна, что у меня появилось желание обклеить ей весь мир!', 'Как бы я хотела оказаться рядом с тобой на этом фото.',
   'Я в шоке.. А можно увидеть такую красоту вживую?', 'Вот если бы на этом фото был бы ещё и я, то получилась бы самая лучшая семейная фотография в мире.',
   'Видимо не важно кто снимает, важно кого фотографируют!', 'Такая фотография не должна быть здесь, она должна блистать на обложке глянцевого журнала!',
   'Давно не видел таких красивых фотографий!', 'А говорят мужчины не модели… Ты потрясающе позируешь!', 'А можно эта фотография станет моей самой любимой?'
];

const users = ['alina_malechko', '_nazik_boyko__777', 'troitskiydmitriy', 'roberttsuguryan', 'bakalymroman', 'oliaklishchova', '_emi_ly', 'pigarkinanton',
               'milkshedy', 'jyzzy_', '_b.r.o_d.y_a.g.a_', '_zheka_polikarpov_', 'jack_jsteele', 'diana.suhovetska17', 'artemiivoitov', 't.a.r.e.kxoxo', 
               'ninaivkova', '_a__menshikova_', 'milkshedy', 'ania4935', '_ka__rin__ka_', 'b_dmitr', 'artem.arc', 'samanthaming', 'tr.al.v','vildanazuraeva'];

const lorem = ['Lorem ipsum dolor sit amet', 'consectetur adipiscing elit', 'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua', 'Turpis tincidunt id aliquet risus feugiat in ante.',
                'Vulputate mi sit amet mauris commodo quis', 'Morbi tempus iaculis urna id volutpat lacus laoreet non', 'Morbi tempus iaculis urna id volutpat lacus laoreet', 'Nec dui nunc mattis enim ut', 
                'Sit amet tellus cras adipiscing.', 'Nunc eget lorem dolor sed viverra ipsum nunc aliquet bibendum.','Amet nisl suscipit adipiscing bibendum auctor', 
                'Purus in mollis nunc sed id semper risus in hendrerit.','Non arcu risus quis varius quam quisque id', 
                'Aliquam sem fringilla ut morbi tincidunt.','Lectus quam id leo in vitae.', 
                'Consequat semper viverra nam libero justo laoreet sit amet cursus.', ]


const media = 33;
const follows = random(50, 10000);

const randomUser = () => {
   return {publications: shufflePhoto(follows, publications.slice(0)).slice(0, media)}
}


console.log(randomUser());