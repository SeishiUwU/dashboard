import { render, screen, waitFor } from '@testing-library/react';
import Dashboard from './Dashboard';
import * as service from '../services/videoService';

test('renders video list', async () => {
  jest.spyOn(service, 'getVideoList').mockResolvedValue(['a.mp4']);
  render(<Dashboard/>);
  await waitFor(()=> expect(screen.getByText('a')).toBeInTheDocument());
});
