import { getContentData } from '@/api';
import Footer from '@/components/Footer/Footer';
import Header from '@/components/Header/Header';
import { ROUT_CONTENT, ROUT_MOVIES } from '@/constants/routers';
import { ContentType } from '@/models/common.type';
import { MovieType } from '@/models/movie.type';
import { getMoviesStaticPaths } from '@/utils/getMoviesStaticPaths';
import MovieCard from '@/views/Movie/Movie';
import type { GetStaticPaths, GetStaticProps, NextPage } from 'next';

interface Props {
	content: ContentType,
	movie: MovieType,
}

const Index: NextPage<Props> = ({
	content,
	movie,
}) => {
	return (
		<>
			<Header content={content}/>

			<MovieCard movie={movie}/>

			<Footer />
		</>
	);
};

export const getStaticPaths: GetStaticPaths = async () => {
	const [movies] = await Promise.all([
    getContentData(ROUT_MOVIES),
  ]);

	const paths = getMoviesStaticPaths(movies);

	return {
		paths: paths || [],
		fallback: 'blocking',
	};
};


export const getStaticProps: GetStaticProps = async ({params}) => {
	try {
		const [content, movie] = await Promise.all([
			getContentData(ROUT_CONTENT),
			getContentData(ROUT_MOVIES, params?.slug as string),
		])

		return {
			props: {
				content,
				movie: movie[0],
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
