import { Result, Card, Button, ConfigProvider } from 'antd';
import { useNavigate } from 'react-router-dom';
import { HomeOutlined, RocketOutlined, QuestionCircleOutlined } from '@ant-design/icons';
import { motion } from 'framer-motion';
import './NotFoundPage.css';

const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#112d4e',
          borderRadius: 12,
        },
      }}
    >
      <main className="not-found-page" aria-labelledby="not-found-title">
        {/* Éléments de décoration animés en arrière-plan */}
        <div className="bg-decoration">
          <motion.div 
            className="shape shape-1"
            animate={{ 
              scale: [1, 1.2, 1],
              rotate: [0, 90, 0],
              x: [0, 50, 0],
              y: [0, 30, 0]
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div 
            className="shape shape-2"
            animate={{ 
              scale: [1, 1.3, 1],
              rotate: [0, -120, 0],
              x: [0, -40, 0],
              y: [0, 60, 0]
            }}
            transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div 
            className="shape shape-3"
            animate={{ 
              opacity: [0.3, 0.6, 0.3],
              scale: [0.8, 1.1, 0.8]
            }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Card className="not-found-card">
            <Result
              icon={
                <div className="illustration-container">
                  <motion.div 
                    className="floating-icon main-404"
                    animate={{ y: [0, -15, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <span className="text-404">404</span>
                  </motion.div>
                  <motion.div 
                    className="floating-icon icon-rocket"
                    animate={{ 
                      y: [0, -25, 0],
                      x: [0, 10, 0],
                      rotate: [0, 15, 0]
                    }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <RocketOutlined style={{ color: '#3f72af', fontSize: '40px' }} />
                  </motion.div>
                  <motion.div 
                    className="floating-icon icon-question"
                    animate={{ 
                      y: [0, 20, 0],
                      x: [0, -15, 0],
                      rotate: [0, -20, 0]
                    }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <QuestionCircleOutlined style={{ color: '#112d4e', opacity: 0.5, fontSize: '30px' }} />
                  </motion.div>
                </div>
              }
              title={
                <motion.h1 
                  className="not-found-title"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  Oups ! Page introuvable
                </motion.h1>
              }
              subTitle={
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  <p className="not-found-subtitle">
                    La ressource demandée est introuvable ou vous n'avez pas les droits d'accès. 
                    L'équipe <strong>Comptanova</strong> vous aide à retrouver votre chemin.
                  </p>
                </motion.div>
              }
              extra={
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    type="primary"
                    size="large"
                    icon={<HomeOutlined aria-hidden="true" />}
                    onClick={() => navigate('/')}
                    aria-label="Retourner à l'accueil"
                    className="btn-home"
                  >
                    Retourner à l'accueil
                  </Button>
                </motion.div>
              }
            />
          </Card>
        </motion.div>
      </main>
    </ConfigProvider>
  );
};

export default NotFoundPage;
