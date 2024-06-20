import { Container, Content, SuccessIcon, ErrorIcon } from './SharePage.style';
import { useEffect } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Button } from '../../asset/button/Button';

export default function SharePage() {
  useEffect(() => {
    const VITE_KAKAO_KEY = import.meta.env.VITE_KAKAO_KEY;
    const { Kakao } = window;

    if (Kakao) {
      if (!Kakao.isInitialized()) {
        Kakao.init(VITE_KAKAO_KEY);
      }
      Kakao.isInitialized();
    } else {
      console.error('카카오 SDK 로드실패');
    }
  }, []);

  const handleLinkCopy = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      toast.success('링크가 복사되었습니다 :)', {
        position: 'top-center',
        icon: <SuccessIcon />,
        progressClassName: 'Toastify__progress-bar--success'
      });
    } catch (err) {
      toast.error('링크복사 실패', {
        position: 'top-center',
        icon: <ErrorIcon />,
        progressClassName: 'Toastify__progress-bar--error'
      });
    }
  };

  const handleKakaoLink = () => {
    const { Kakao } = window;

    if (Kakao) {
      Kakao.Share.sendDefault({
        objectType: 'feed',
        content: {
          title: 'IT핏',
          description: '나에게 맞는 IT직군은?!',
          imageUrl: 'https://ifh.cc/g/YqwJFL.png',
          link: {
            mobileWebUrl: window.location.href,
            webUrl: window.location.href
          }
        },
        buttons: [
          {
            title: '테스트하러 가기 :)',
            link: {
              mobileWebUrl: window.location.href,
              webUrl: window.location.href
            }
          }
        ]
      });
    } else {
      toast.error('카카오 SDK가 로드되지 않았습니다', {
        position: 'top-center',
        icon: <ErrorIcon />,
        progressClassName: 'Toastify__progress-bar--error'
      });
    }
  };

  return (
    <>
      <Container>
        <Content>
          <Button variant="fill" onClick={handleLinkCopy}>
            링 크 복사하기
          </Button>
          <Button variant="fill" onClick={handleKakaoLink}>
            카카오톡 공유하기
          </Button>
        </Content>
      </Container>
    </>
  );
}