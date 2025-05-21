import axios from 'axios';
import { getCachedData, cacheData } from './redis';

const API_BASE_URL = process.env.API_BASE_URL || 'https://jsonplaceholder.typicode.com';

export async function fetchDataWithCache(endpoint: string, useCache = true) {
	const cacheKey = `api:${endpoint}`;
	const startTime = performance.now();
	let source = 'API';
	
	if (useCache) {
		const cachedData = await getCachedData(cacheKey);
		if (cachedData) {
			source = 'CACHE';
			const endTime = performance.now();
			console.log(`Retrieved data from cache for ${endpoint} in ${endTime - startTime}ms`);
			return { data: cachedData, source, time: endTime - startTime };
		}
	}

	try {
		const response = await axios.get(`${API_BASE_URL}/${endpoint}`);
		const endTime = performance.now();
		console.log(`Fetched data from API for ${endpoint} in ${endTime - startTime}ms`);

		if (useCache) {
			await cacheData(cacheKey, response.data);
		}
	
		return { data: response.data, source, time: endTime - startTime };
	} catch (error) {
		console.error(`Error fetching data from ${endpoint}:`, error);
		throw error;
	}
}

export async function getUsers(useCache = true) {
	return fetchDataWithCache('users', useCache);
}

export async function getPosts(useCache = true) {
	return fetchDataWithCache('posts', useCache);
}

export async function getComments(postId?: number, useCache = true) {
	const endpoint = postId ? `posts/${postId}/comments` : 'comments';
	return fetchDataWithCache(endpoint, useCache);
}