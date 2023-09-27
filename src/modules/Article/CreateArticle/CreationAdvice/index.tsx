/* eslint-disable react/no-unescaped-entities */
/* eslint-disable max-len */
import { Typography } from "@mui/material";

import { AdviceItem } from "./AdviceItem";
import * as Styled from "./styled";

export const CreationAdvice = () => (
	<Styled.Wrapper>
		<Typography variant="Section">A few tips on how to create an article: </Typography>
		<Styled.OrderList>
			<AdviceItem heading="Know your audience">
				Understand who your target audience is and tailor your content to their interests, preferences, and needs. This will help you connect with your readers
				on a deeper level.
			</AdviceItem>
			<AdviceItem heading="Craft a compelling headline">
				Your headline is the first thing readers see, so make it attention-grabbing and relevant to the content. A strong headline can entice users to click and
				read your post.
			</AdviceItem>
			<AdviceItem heading="Start with a hook">
				Begin your post with a captivating introduction that immediately captures the reader's attention. Whether it's a thought-provoking question, a
				fascinating anecdote, or a surprising statistic, the hook should create curiosity and encourage them to keep reading.
			</AdviceItem>
			<AdviceItem heading="Structure your content">
				Organize your blog post into clear sections with subheadings. This helps readers skim the content easily and find what they're looking for. Use bullet
				points, lists, and visuals to enhance readability.
			</AdviceItem>
			<AdviceItem heading="Focus on quality over quantity">
				It's better to create valuable and insightful content rather than lengthy, wordy posts. Aim to provide useful information, practical tips, or
				entertaining stories that resonate with your audience.
			</AdviceItem>
			<AdviceItem heading="Use visuals">
				Incorporate relevant images, infographics, or videos to make your blog post visually appealing and engaging. Visuals can help break up text and convey
				information more effectively.
			</AdviceItem>
			<AdviceItem heading="Keep it concise">
				Be clear and concise in your writing. Avoid unnecessary jargon or complicated language. Keep paragraphs and sentences relatively short to maintain
				reader interest.
			</AdviceItem>
			<AdviceItem heading="Use a conversational tone">
				Write as if you're having a conversation with your readers. Avoid being overly formal and use a friendly, approachable tone that matches your brand or
				personality.
			</AdviceItem>
		</Styled.OrderList>
	</Styled.Wrapper>
);
