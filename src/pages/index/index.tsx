import { Component, PropsWithChildren } from 'react';
import { View, Text } from '@tarojs/components';
import './index.less';
import Header from '@/components/header';

export default class Index extends Component<PropsWithChildren> {
	componentWillMount() {}

	componentDidMount() {}

	componentWillUnmount() {}

	componentDidShow() {}

	componentDidHide() {}

	render() {
		return (
			<View className="text-24">
				<Header />
				<Text>Hello world!</Text>
			</View>
		);
	}
}
