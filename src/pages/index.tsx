import { getContentData } from '@/api';
import Header from '@/components/Header/Header';
import { ROUT_CONTENT } from '@/constants/routers';
import { ContentType } from '@/models/common.type';
import type { GetStaticProps, NextPage } from 'next';

interface Props {
	content: ContentType,
}

const Index: NextPage<Props> = ({
	content,
}) => {
	return (
		<>
			<Header content={content}/>
		</>
	);
};

export const getStaticProps: GetStaticProps = async () => {
	try {
		const [content] = await Promise.all([
			getContentData(ROUT_CONTENT),
		])

		console.log('content getStaticProps', content)
		
		return {
			props: {
				content,
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
