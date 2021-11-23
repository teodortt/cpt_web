import firebase from 'firebase/app';
import "firebase/auth";
import { db } from '../../components/firebase';
import Link from 'next/link'

const Blog = (props) => {

    return (
        <div>
            <h2>{props.title}</h2>
            <p>
                {props.content}
            </p>
            <Link href="/">
                <a>Back</a>
            </Link>
        </div>
    )
}

// export const getServerSideProps = async ({ query }) => {
//     const content = {}
//     //   await fire.firestore()
//     //     .collection('blog')
//     //     .doc(query.id)
//     //     .get()
//     //     .then(result => {
//     //       content['title'] = result.data().title;
//     //       content['content'] = result.data().content;
//     //     });
//     await db.collection('cpt')
//         .doc('general')
//         .collection('codes')
//         .add({
//             code: '2322332',
//             percent: 'percent',
//             date: new Date(),
//         });

//     return {
//         props: {
//             title: content.title,
//             content: content.content,
//         }
//     }
// }

export default Blog