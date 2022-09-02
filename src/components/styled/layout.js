import styled from 'styled-components';

export const TopLeft = styled.div`
  position: absolute;
  top: 0;
  right: auto;
  bottom: auto;
  left: 0;
  padding: 20px;
`;

export const TopRight = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: auto;
  left: auto;
  padding: 20px;
`;

export const BottomRight = styled.div`
  position: absolute;
  top: auto;
  right: 0;
  bottom: 0;
  left: auto;
  padding: 20px;
`;

export const BottomLeft = styled.div`
  position: absolute;
  top: auto;
  right: auto;
  bottom: 0;
  left: 0;
  padding: 20px;
`;

export const Overlay = styled.div`
  position: absolute;
  inset: 0;
  background: #0009;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
`;

export const OverlayInner = styled.div`
  background: #4049;
  padding: 20px;
`;
