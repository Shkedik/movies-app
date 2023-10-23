import { getContentData } from '@/api';
import Footer from '@/components/Footer/Footer';
import Header from '@/components/Header/Header';
import { ROUT_CONTENT, ROUT_MOVIES } from '@/constants/routers';
import { ContentType } from '@/models/common.type';
import { MovieType } from '@/models/movie.type';
import ListMovies from '@/views/ListMovies/ListMovies';
import type { GetStaticProps, NextPage } from 'next';

interface Props {
	content: ContentType,
	movies: MovieType[],
}

const Index: NextPage<Props> = ({
	content,
	movies,
}) => {
	return (
		<>
			<Header content={content}/>

			<ListMovies movies={movies}/>

			<Footer />
		</>
	);
};

export const getStaticProps: GetStaticProps = async () => {
	try {
		const [content, movies] = await Promise.all([
			getContentData(ROUT_CONTENT),
			getContentData(ROUT_MOVIES),
		])

		return {
			props: {
				content,
				movies,
			},
			revalidate: 60,
		};
	} catch (e) {
		return {
			notFound: true,
		};
	}
};

export default Index;
