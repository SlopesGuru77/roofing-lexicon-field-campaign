import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './state/AuthContext';
import { ProfileProvider } from './state/ProfileContext';
import { CollectionProvider } from './state/CollectionContext';
import { RequireAuth } from './components/shell/RequireAuth';
import { AppShell } from './components/shell/AppShell';
import Login from './routes/Login';
import AuthCallback from './routes/AuthCallback';
import Welcome from './routes/Welcome';
import Map from './routes/Map';
import Collection from './routes/Collection';
import Library from './routes/Library';
import Profile from './routes/Profile';
import Boss from './routes/Boss';
import Credential from './routes/Credential';

export default function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <ProfileProvider>
          <CollectionProvider>
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/auth/callback" element={<AuthCallback />} />
              <Route path="/welcome" element={<RequireAuth><Welcome /></RequireAuth>} />
              <Route path="/boss/:id" element={<RequireAuth><Boss /></RequireAuth>} />
              <Route path="/credential/:zone" element={<RequireAuth><Credential /></RequireAuth>} />
              <Route element={<RequireAuth><AppShell /></RequireAuth>}>
                <Route path="/map" element={<Map />} />
                <Route path="/collection" element={<Collection />} />
                <Route path="/library" element={<Library />} />
                <Route path="/profile" element={<Profile />} />
              </Route>
              <Route path="*" element={<Navigate to="/map" replace />} />
            </Routes>
          </CollectionProvider>
        </ProfileProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}
